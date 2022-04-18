import { getRandom } from './util';

export default function getTeamMembers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          Id: 'VwO3CXSPGaXziji',
          TeamMemberRole: 'Carpenter',
          UserId: 'W1Tcbuw82CUFFhJ',
          SplitPercentage__c : 20,
          User: {
            Name: 'Lucca Salinas'
          }
        },
        {
          Id: '05uszpaOuZDJJJ6',
          TeamMemberRole: 'Carpenter',
          UserId: 'c4ICODIsijN5mL7',
          SplitPercentage__c : 80,
          User: {
            Name: 'Zoha Lara'
          }
        },
        {
          Id: 'zcp722VnlWSjvJQ',
          TeamMemberRole: 'Plumber',
          UserId: '17Dugf8cga9VV9M',
          SplitPercentage__c : 100,
          User: {
            Name: 'Ritik Tucker'
          }
        }
      ]);
    }, getRandom(800, 2500));
  });
}
