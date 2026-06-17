# construimos build
FROM node:20-alpine AS builder

# crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# copiamos solo los archivos de configuración de paquetes primero (optimiza la caché)
COPY package*.json ./

# instalamos todas las dependencias (incluyendo las de desarrollo para compilar)
RUN npm ci

# copiamos el resto del código fuente del backend
COPY . .

# compilamos el proyecto NestJS (genera la carpeta dist)
RUN npm run build

# produccion
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# instalamos las dependencias de producción (hace la imagen muy ligera)
RUN npm ci --omit=dev

# copiamos solo la carpeta compilada desde la etapa anterior
COPY --from=builder /app/dist ./dist

# exponer el puerto en el que corre tu NestJS
EXPOSE 3000

# Comando para arrancar la aplicación en producción
CMD ["node", "dist/main.js"]