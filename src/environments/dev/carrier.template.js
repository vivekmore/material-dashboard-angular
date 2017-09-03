{
  carriers: [
    {
      'repeat(10)': {
        _id: '{{index()}}',
        name: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        phone: '{{phone()}}',
        email: function (tags) {
          return (this.name.first + '.' + this.name.last + '@' + this.company + tags.domainZone()).toLowerCase();
        }
      }
    }
  ]
}
