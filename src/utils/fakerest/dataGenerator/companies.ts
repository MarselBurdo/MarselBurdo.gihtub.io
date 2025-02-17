import { Faker, ru } from '@faker-js/faker';

import { Company, RAFile } from '@/types';

import { Db } from './types';
import { randomDate } from './utils';

const regex = /\W+/;

export const faker = new Faker({ locale: [ru] });

function generateRandomCompanyName() {
  return faker.company.name();
}

const companyNames = Array.from({ length: 58 }, () =>
  generateRandomCompanyName()
);

const countries = ['Russia', 'Uzbekistan', 'Kazahstan'];

export const generateCompanies = (db: Db): Partial<Company>[] => {
  return companyNames.map((name, id) => {
    return {
      id,
      name,
      logo: {
        title: faker.lorem.text(),
        src: `./logos/${id}.png`,
      } as RAFile,
      linkedin_url: `https://www.linkedin.com/company/${name
        .toLowerCase()
        .replace(regex, '_')}`,
      // website: faker.internet.url(),
      phone_number: faker.phone.number(),
      address: faker.location.streetAddress(),
      zipcode: faker.location.zipCode(),
      city: faker.location.city(),
      stateAbbr: faker.location.state(),
      created_at: randomDate().toISOString(),
      description: faker.lorem.paragraph(),
      tax_identifier: faker.number.int().toString(),
      country: countries[Math.floor(Math.random() * countries.length)],
      context_links: [],
      nb_contacts: 0,
      nb_deals: 0,
    };
  });
};
