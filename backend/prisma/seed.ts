import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({
  datasourceUrl: "file:./dev.db",
});

async function main() {
  console.log('Seeding the database...');

  // Create Admin
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.create({
    data: {
      companyId: 'ADMIN-001',
      username: 'admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // Bengaluru Companies Data
  const companiesData = [
    { name: 'Ace Micromatic Manufacturing Center', area: 'Peenya Industrial Area', type: 'Private Limited' },
    { name: 'Jyoti CNC Technologies', area: 'Bommasandra Industrial Area', type: 'Private Limited' },
    { name: 'Lakshmi Machine Works Partner Facility', area: 'Whitefield Industrial Area', type: 'Public Limited' },
    { name: 'Bharat Fritz Werner Unit', area: 'Peenya Industrial Area', type: 'Private Limited' },
    { name: 'Kennametal Manufacturing Center', area: 'Jigani Industrial Area', type: 'Multinational Corporation' },
    { name: 'Wendt Precision Systems', area: 'Bommasandra Industrial Area', type: 'Joint Venture' },
    { name: 'Bosch Manufacturing Solutions', area: 'Adugodi', type: 'Multinational Corporation' },
    { name: 'Siemens Industrial Solutions', area: 'Electronic City', type: 'Multinational Corporation' },
    { name: 'Schaeffler Manufacturing Hub', area: 'Hosur Road', type: 'Multinational Corporation' },
    { name: 'Timken Engineering Center', area: 'Whitefield Industrial Area', type: 'Multinational Corporation' },
    { name: 'Fanuc Automation Center', area: 'Peenya Industrial Area', type: 'Multinational Corporation' },
    { name: 'Sandvik Manufacturing Unit', area: 'Yelahanka Industrial Area', type: 'Multinational Corporation' },
    { name: 'Godrej Tooling Center', area: 'Rajajinagar Industrial Area', type: 'Public Limited' },
    { name: 'Tata Advanced Manufacturing Cell', area: 'Nelamangala Industrial Area', type: 'Public Limited' },
    { name: 'Yaskawa Robotics Center', area: 'Electronic City', type: 'Multinational Corporation' },
  ];

  for (let i = 0; i < companiesData.length; i++) {
    const cData = companiesData[i];
    const companyId = `MLK-${100000 + i}`;
    const user = await prisma.user.create({
      data: {
        companyId,
        username: `user_${companyId}`,
        password: hashedPassword,
        role: 'OWNER',
        company: {
          create: {
            name: cData.name,
            companyType: cData.type,
            manufacturingCategory: 'General Manufacturing',
            city: 'Bengaluru',
            state: 'Karnataka',
            area: cData.area,
            isVerified: true,
            rating: parseFloat((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1)), // Random rating between 4.0 and 5.0
            reviewCount: Math.floor(Math.random() * 50) + 5,
          },
        },
      },
      include: {
        company: true,
      }
    });

    if (user.company) {
      // Add a couple of machines to each company
      const machineCategories = ['CNC Machine', 'VMC', 'Laser Cutter', 'Industrial Robot', 'EDM Machine'];
      const hourlyRates = [2000, 3000, 2500, 5000, 1500];
      
      const machine1CatIdx = Math.floor(Math.random() * machineCategories.length);
      const machine2CatIdx = Math.floor(Math.random() * machineCategories.length);

      await prisma.machine.create({
        data: {
          companyId: user.company.id,
          name: `${cData.name.split(' ')[0]} ${machineCategories[machine1CatIdx]}`,
          category: machineCategories[machine1CatIdx],
          manufacturer: 'Sample Manufacturer',
          modelNumber: `MDL-${Math.floor(Math.random() * 1000)}`,
          condition: 'Excellent',
          hourlyRate: hourlyRates[machine1CatIdx],
          status: 'AVAILABLE',
          photos: '[]',
          videos: '[]',
        }
      });

      await prisma.machine.create({
        data: {
          companyId: user.company.id,
          name: `${cData.name.split(' ')[0]} ${machineCategories[machine2CatIdx]}`,
          category: machineCategories[machine2CatIdx],
          manufacturer: 'Sample Manufacturer',
          modelNumber: `MDL-${Math.floor(Math.random() * 1000)}`,
          condition: 'Good',
          hourlyRate: hourlyRates[machine2CatIdx],
          status: 'AVAILABLE',
          photos: '[]',
          videos: '[]',
        }
      });
    }
  }

  // Create a Demo Customer
  const customerUser = await prisma.user.create({
    data: {
      companyId: 'MLK-CUSTOMER1',
      username: 'customer1',
      password: hashedPassword,
      role: 'CUSTOMER',
      company: {
        create: {
          name: 'Demo Startup Inc.',
          companyType: 'Startup',
          manufacturingCategory: 'Product Design',
          city: 'Bengaluru',
          state: 'Karnataka',
          area: 'HSR Layout',
          isVerified: true,
        },
      },
    },
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  });
