import React from 'react'

function List() {
  const users = [
    {
      "index": 0,
      "name": "Aurelia Gonzales",
      "isActive": false,
      "registered": "2015-02-11T04:22:39+0000",
      "age": 20,
      "dep":"Developer",
      "gender": "female",
      "eyeColor": "green",
      "favoriteFruit": "banana",
      "company": {
        "title": "YURTURE",
        "email": "aureliagonzales@yurture.com",
        "phone": "+1 (940) 501-3963",
        "location": {
          "country": "USA",
          "address": "694 Hewes Street"
        }
      },
      "tags": [
        "enim",
        "id",
        "velit",
        "ad",
        "consequat"
      ]
    },
    {
      "index": 1,
      "name": "Kitty Snow",
      "isActive": false,
      "registered": "2018-01-23T04:46:15+0000",
      "age": 38,
      "dep":"Sales",
      "gender": "female",
      "eyeColor": "blue",
      "favoriteFruit": "apple",
      "company": {
        "title": "DIGITALUS",
        "email": "kittysnow@digitalus.com",
        "phone": "+1 (949) 568-3470",
        "location": {
          "country": "Italy",
          "address": "154 Arlington Avenue"
        }
      },
      "tags": [
        "ut",
        "voluptate",
        "consequat",
        "consequat"
      ]
    },
    {
      "index": 2,
      "name": "Hays Wise",
      "isActive": false,
      "registered": "2015-02-23T10:22:15+0000",
      "age": 24,
      "dep":"Developer",
      "gender": "male",
      "eyeColor": "green",
      "favoriteFruit": "strawberry",
      "company": {
        "title": "EXIAND",
        "email": "hayswise@exiand.com",
        "phone": "+1 (801) 583-3393",
        "location": {
          "country": "France",
          "address": "795 Borinquen Pl"
        }
      },
      "tags": [
        "amet",
        "ad",
        "elit",
        "ipsum"
      ]
    },
    {
      "index": 3,
      "name": "Karyn Rhodes",
      "isActive": true,
      "registered": "2014-03-11T03:02:33+0000",
      "age": 39,
      "dep":"Testing",
      "gender": "female",
      "eyeColor": "green",
      "favoriteFruit": "strawberry",
      "company": {
        "title": "RODEMCO",
        "email": "karynrhodes@rodemco.com",
        "phone": "+1 (801) 505-3760",
        "location": {
          "country": "USA",
          "address": "521 Seigel Street"
        }
      },
      "tags": [
        "cillum",
        "exercitation",
        "excepteur"
      ]
    },
    {
      "index": 4,
      "name": "Alison Farmer",
      "isActive": false,
      "registered": "2018-01-22T10:05:45+0000",
      "age": 33,
      "dep":"Testing",
      "gender": "female",
      "eyeColor": "brown",
      "favoriteFruit": "banana",
      "company": {
        "title": "OTHERSIDE",
        "email": "alisonfarmer@otherside.com",
        "phone": "+1 (902) 572-3954",
        "location": {
          "country": "Italy",
          "address": "356 Newkirk Placez"
        }
      },
      "tags": [
        "deserunt",
        "et",
        "duis",
        "dolor"
      ]
    }
  ]

  const userList = users.map(item =>  
    <ul key = {item.index}>
      <li>{item.index} - {item.name}</li>
    </ul>
  )

  //with index (when not id)
  // const userList = users.map((item, index) =>  
  //   <ul key = {index}>
  //     <li>{index} - {item.name}</li>
  //   </ul>
  // )
  console.log(userList)
  return (
    <div>
      {userList}
    </div>
  )
}

export default List
