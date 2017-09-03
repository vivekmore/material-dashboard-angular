{
  customers: [
    {
      'repeat(10)': {
        _id: '{{index()}}',
        name: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(10000, 99999)}}',
        email: function (tags) {
          return (this.name.first + '@' + this.name.last + tags.domainZone()).toLowerCase();
        },
        phone: '{{phone()}}'
      }
    }
  ]
}
