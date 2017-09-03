{
  customers: [
    {
      'repeat(10)': {
        _id: '{{index()}}',
        name: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        address: {
          line1: '{{integer(50, 500)}} {{street()}}',
          line2: 'at intersection of {{street()}} and {{street()}}',
          city: '{{city()}}',
          state: '{{state()}}',
          zip: '{{integer(20000, 90000)}}'
        },
        email: function (tags) {
          return (this.name.first + '@' + this.name.last + tags.domainZone()).toLowerCase();
        },
        phone: '{{phone()}}'
      }
    }
  ]
}
