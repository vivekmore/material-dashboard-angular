import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delivery-route-details',
    templateUrl: './delivery-route-details.component.html'
})
export class DeliveryRouteDetailsComponent implements OnInit {

    deliveryPoints = [
        {
            "_id": "59bee6cd78333ea4cf7a924e",
            "address": "812 Miller Place, Sardis, West Virginia, 8965",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 4
                },
                {
                    "name": "BAR",
                    "count": 1
                },
                {
                    "name": "NYT",
                    "count": 5
                }
            ]
        },
        {
            "_id": "59bee6cd9f11fa301d1391a4",
            "address": "878 Kent Avenue, Kanauga, Kansas, 2459",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 5
                },
                {
                    "name": "NYT",
                    "count": 10
                }
            ]
        },
        {
            "_id": "59bee6cd5564431e231efc13",
            "address": "827 Plymouth Street, Connerton, Marshall Islands, 5635",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 8
                }
            ]
        },
        {
            "_id": "59bee6cdbd3391efd0eb9e4a",
            "address": "989 River Street, Diaperville, Northern Mariana Islands, 9087",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 1
                },
                {
                    "name": "WSJ",
                    "count": 9
                }
            ]
        },
        {
            "_id": "59bee6cd40ad96bad9203961",
            "address": "710 John Street, Coalmont, Wyoming, 8627",
            "subscriptions": [
                {
                    "name": "NYT",
                    "count": 5
                },
                {
                    "name": "DFP",
                    "count": 4
                }
            ]
        },
        {
            "_id": "59bee6cd7f4c91c70bad8bdc",
            "address": "291 Miller Avenue, Defiance, Maryland, 6129",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 4
                },
                {
                    "name": "WSJ",
                    "count": 5
                }
            ]
        },
        {
            "_id": "59bee6cd373f5a80319aac21",
            "address": "430 Clark Street, Ferney, Palau, 488",
            "subscriptions": []
        },
        {
            "_id": "59bee6cd120ab1b47cb08044",
            "address": "536 Congress Street, Lydia, Indiana, 1896",
            "subscriptions": []
        },
        {
            "_id": "59bee6cdcc30473e70ec5261",
            "address": "856 Sharon Street, Southview, Nebraska, 4808",
            "subscriptions": []
        },
        {
            "_id": "59bee6cddc58ed93a35d3419",
            "address": "324 Nevins Street, Machias, Massachusetts, 3431",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 5
                },
                {
                    "name": "NYT",
                    "count": 4
                }
            ]
        },
        {
            "_id": "59bee6cd6d6ec3cbb27319fe",
            "address": "525 Oxford Walk, Allensworth, South Carolina, 1995",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 5
                },
                {
                    "name": "WSJ",
                    "count": 4
                },
                {
                    "name": "DFP",
                    "count": 10
                }
            ]
        },
        {
            "_id": "59bee6cd72b3b29d9129d145",
            "address": "179 Little Street, Draper, American Samoa, 8553",
            "subscriptions": []
        },
        {
            "_id": "59bee6cdf7deb4a63bd45fd6",
            "address": "314 Sedgwick Place, Leyner, Michigan, 5128",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 4
                },
                {
                    "name": "DFP",
                    "count": 3
                }
            ]
        },
        {
            "_id": "59bee6cd965f76b576ee5b3c",
            "address": "976 Times Placez, Edgewater, Delaware, 6682",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 4
                },
                {
                    "name": "DFP",
                    "count": 2
                }
            ]
        },
        {
            "_id": "59bee6cd3cbd24371fdea413",
            "address": "399 Atlantic Avenue, Wattsville, North Carolina, 6039",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 9
                },
                {
                    "name": "DFP",
                    "count": 6
                },
                {
                    "name": "NYT",
                    "count": 3
                }
            ]
        },
        {
            "_id": "59bee6cdad3d8e3a853001a5",
            "address": "263 Montgomery Street, Kraemer, New York, 5977",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 8
                },
                {
                    "name": "DFP",
                    "count": 6
                }
            ]
        },
        {
            "_id": "59bee6cd27e1931b4288f6d4",
            "address": "299 Thomas Street, Brownlee, Washington, 564",
            "subscriptions": []
        },
        {
            "_id": "59bee6cda1812ac1a61305fe",
            "address": "720 Greenpoint Avenue, Shrewsbury, Alabama, 9400",
            "subscriptions": []
        },
        {
            "_id": "59bee6cdc266c104eeae43d6",
            "address": "760 Miami Court, Saticoy, Pennsylvania, 8285",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 10
                }
            ]
        },
        {
            "_id": "59bee6cda4e686bb8e011cea",
            "address": "803 Woodrow Court, Brantleyville, Oregon, 9583",
            "subscriptions": []
        },
        {
            "_id": "59bee6cd6bae1810496bb170",
            "address": "284 Chester Street, Warren, North Dakota, 2415",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 1
                }
            ]
        },
        {
            "_id": "59bee6cd10db2c07e57ad90d",
            "address": "135 Laurel Avenue, Sylvanite, Utah, 8110",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 2
                },
                {
                    "name": "NYT",
                    "count": 8
                }
            ]
        },
        {
            "_id": "59bee6cd5f9d7d1fe7c531e9",
            "address": "155 Powers Street, Eastmont, Virginia, 6930",
            "subscriptions": []
        },
        {
            "_id": "59bee6cd1d7936955e1262e4",
            "address": "901 Love Lane, Leroy, Virgin Islands, 8144",
            "subscriptions": []
        },
        {
            "_id": "59bee6cd75a0f5b8de22273f",
            "address": "180 Rugby Road, Basye, Rhode Island, 343",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 9
                }
            ]
        },
        {
            "_id": "59bee6cd22361b9cd58e890b",
            "address": "668 Ide Court, Lynn, New Mexico, 969",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 2
                },
                {
                    "name": "WSJ",
                    "count": 5
                },
                {
                    "name": "DFP",
                    "count": 8
                }
            ]
        },
        {
            "_id": "59bee6cda9d351144029bd92",
            "address": "691 Midwood Street, Jeff, Colorado, 438",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 8
                }
            ]
        },
        {
            "_id": "59bee6cd9256e848ba9c926d",
            "address": "599 Auburn Place, Montura, Kentucky, 5734",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 2
                }
            ]
        },
        {
            "_id": "59bee6cd7e48888db1ddcb77",
            "address": "405 Dunham Place, Watchtower, Mississippi, 3777",
            "subscriptions": [
                {
                    "name": "NYT",
                    "count": 7
                }
            ]
        },
        {
            "_id": "59bee6cd9bca825040851269",
            "address": "973 Howard Avenue, Croom, Louisiana, 5570",
            "subscriptions": []
        },
        {
            "_id": "59bee6cdc872b9b524f32d1b",
            "address": "393 Noble Street, Delco, Alaska, 2625",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 4
                },
                {
                    "name": "NYT",
                    "count": 7
                }
            ]
        },
        {
            "_id": "59bee6cdec48397c570868aa",
            "address": "769 Aviation Road, Walton, Federated States Of Micronesia, 9918",
            "subscriptions": []
        },
        {
            "_id": "59bee6cd9a6d5826869f36fa",
            "address": "406 Meserole Avenue, Gratton, Missouri, 482",
            "subscriptions": []
        },
        {
            "_id": "59bee6cd109739074c43dec1",
            "address": "777 Ridgewood Avenue, Guilford, New Jersey, 9526",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 6
                }
            ]
        },
        {
            "_id": "59bee6cdce4f4ed33bec8c0c",
            "address": "730 Troutman Street, Bentonville, Wisconsin, 1420",
            "subscriptions": [
                {
                    "name": "NYT",
                    "count": 7
                },
                {
                    "name": "BAR",
                    "count": 6
                }
            ]
        },
        {
            "_id": "59bee6cdd1baef37f31603dc",
            "address": "312 Emmons Avenue, Dexter, South Dakota, 2709",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 1
                },
                {
                    "name": "BAR",
                    "count": 5
                }
            ]
        },
        {
            "_id": "59bee6cdf17fc1bd68ef5926",
            "address": "214 Bethel Loop, Nile, Arkansas, 7447",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 3
                },
                {
                    "name": "DFP",
                    "count": 1
                }
            ]
        },
        {
            "_id": "59bee6cd79027e978a023c3b",
            "address": "886 Boynton Place, Kiskimere, Maine, 7222",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 5
                },
                {
                    "name": "NYT",
                    "count": 6
                },
                {
                    "name": "BAR",
                    "count": 7
                }
            ]
        },
        {
            "_id": "59bee6cdc274224be2108e52",
            "address": "365 Dennett Place, Shindler, Georgia, 6133",
            "subscriptions": [
                {
                    "name": "NYT",
                    "count": 10
                },
                {
                    "name": "NYT",
                    "count": 4
                }
            ]
        },
        {
            "_id": "59bee6cd6d83480a420dbb83",
            "address": "231 Girard Street, Fulford, California, 4274",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 10
                },
                {
                    "name": "WSJ",
                    "count": 2
                }
            ]
        },
        {
            "_id": "59bee6cdaabd0514e3a63141",
            "address": "195 Goodwin Place, Levant, Oklahoma, 7794",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 10
                },
                {
                    "name": "WSJ",
                    "count": 1
                }
            ]
        },
        {
            "_id": "59bee6cda16acd306d6e89a5",
            "address": "721 Whitty Lane, Rose, New Hampshire, 3223",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 1
                },
                {
                    "name": "BAR",
                    "count": 1
                },
                {
                    "name": "BAR",
                    "count": 4
                }
            ]
        },
        {
            "_id": "59bee6cd58ffad6f7e755286",
            "address": "501 Clifford Place, Hatteras, Montana, 8403",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 7
                },
                {
                    "name": "DFP",
                    "count": 10
                },
                {
                    "name": "BAR",
                    "count": 2
                }
            ]
        },
        {
            "_id": "59bee6cd651a6bf953224de2",
            "address": "783 Hutchinson Court, Jennings, Tennessee, 7391",
            "subscriptions": [
                {
                    "name": "BAR",
                    "count": 6
                },
                {
                    "name": "NYT",
                    "count": 2
                },
                {
                    "name": "DFP",
                    "count": 2
                }
            ]
        },
        {
            "_id": "59bee6cd3233ee7fb26fb9fb",
            "address": "973 Dunne Court, Caron, Texas, 2334",
            "subscriptions": [
                {
                    "name": "NYT",
                    "count": 9
                }
            ]
        },
        {
            "_id": "59bee6cdd545125dd7b1b0ce",
            "address": "341 Lott Street, Dodge, Ohio, 2942",
            "subscriptions": [
                {
                    "name": "NYT",
                    "count": 3
                },
                {
                    "name": "BAR",
                    "count": 1
                }
            ]
        },
        {
            "_id": "59bee6cd72aa9fba2d49ac4f",
            "address": "832 Homecrest Court, Norwood, Nevada, 7690",
            "subscriptions": [
                {
                    "name": "WSJ",
                    "count": 5
                },
                {
                    "name": "DFP",
                    "count": 2
                }
            ]
        },
        {
            "_id": "59bee6cdcd3fdf5a44f44dab",
            "address": "391 Gold Street, Thomasville, Idaho, 886",
            "subscriptions": []
        },
        {
            "_id": "59bee6cd19075fe6d3b8b624",
            "address": "800 Amber Street, Albany, Minnesota, 1377",
            "subscriptions": [
                {
                    "name": "NYT",
                    "count": 4
                }
            ]
        },
        {
            "_id": "59bee6cd1a96b17fb7523202",
            "address": "745 Rose Street, Oneida, Guam, 1036",
            "subscriptions": [
                {
                    "name": "DFP",
                    "count": 7
                },
                {
                    "name": "WSJ",
                    "count": 6
                },
                {
                    "name": "WSJ",
                    "count": 3
                }
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
