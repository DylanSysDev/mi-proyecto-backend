import * as bcrypt from 'bcrypt';

async function test() {
  const hash = await bcrypt.hash('123456', 10);

  console.log(hash);
}
//$2b$10$mt.pWm3Sk56kxpVLI4TXE./AYP1epiqiMSdEQyFcRMLWhxx41v6Oq
test();