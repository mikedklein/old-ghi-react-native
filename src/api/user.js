// TODO at least put this in a faked API to demonstrate gathering data
export default userData = {
  name: 'Mike Klein',
  fName: 'Mike',
  lName: 'Klein',
  dob: 'November 13, 1982',
  familyContact: 'Jamie Klein',
  address: {
    street: '1234 Some Street',
    city: 'Reston',
    state: 'VA',
    zip: '20191'
  },
  telephone: '(555) 555-3456',
  description: 'Mike is a single male who speaks English, and practices Scientology.',
  allergies: [
    {
      drug: 'Penicillin',
      mainSymptom: 'Hives',
      severity: 5
    },
    {
      drug: 'Codeine',
      mainSymptom: 'Shortness of breath',
      severity: 3
    },
    {
      drug: 'Bee Stings',
      mainSymptom: 'Anaphylactic shock',
      severity: 4
    },
  ],
  doctors: [
    {
      name: 'Dr. Bala Venktaraman',
      role: 'Primary Provider',
      address: {
        street: '1234 Some Street',
        city: 'Reston',
        state: 'VA',
        zip: '20191'
      },
      phone: '(111) 222-3456'
    },
    {
      name: 'Dr. Henry Seven',
      role: 'Oncologist',
      address: {
        street: '1234 Some Street',
        city: 'Reston',
        state: 'VA',
        zip: '20191'
      },
      phone: '(222) 333-3456'
    }
  ]
};