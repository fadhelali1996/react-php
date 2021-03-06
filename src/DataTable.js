import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function TopSearch() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Position',
        field: 'position',
        width: 270,
      },
      {
        label: 'Office',
        field: 'office',
        width: 200,
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'disabled',
        width: 100,
      },
      {
        label: 'button',
        field: 'button',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
        button:<button><a href="https://www.facebook.com">facebook</a></button>
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: '$162',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        date: '2012/12/02',
        salary: '$372',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        salary: '$137',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        salary: '$327',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        salary: '$205',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: '23',
        date: '2008/12/13',
        salary: '$103',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Jena Gaines',
        position: 'Office Manager',
        office: 'London',
        age: '30',
        date: '2008/12/19',
        salary: '$90',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: '22',
        date: '2013/03/03',
        salary: '$342',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: '36',
        date: '2008/10/16',
        salary: '$470',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: '43',
        date: '2012/12/18',
        salary: '$313',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        age: '19',
        date: '2010/03/17',
        salary: '$385',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        age: '66',
        date: '2012/11/27',
        salary: '$198',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: '64',
        date: '2010/06/09',
        salary: '$725',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: '59',
        date: '2009/04/10',
        salary: '$237',
        button:<button><a href="www.facebook.com">facebook</a></button>

      },
      {
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: '41',
        date: '2012/10/13',
        salary: '$132',
        button:<button><a href="www.facebook.com">facebook</a></button>

      }
    ],
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
}