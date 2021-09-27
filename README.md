# graphQl-server

**Mutation**
Mutacion para crear nueva persona
```gql
mutation {
  createPerson(input: {name:"Jipson",phone:"0635463546",street:"Nicolas Guillen",city:"Ecuador"}) {
    id
    name
    phone
  }
}

```
**Mutation**
eliminar una persona por Id
```gql
mutation{
  deletePerson(id:"615243fb344d1e47ec901c47"){
    name
  }
}
```

**Query**
All person
```gql
query{
  allPersons{
    name
    id
    phone
  }
}
```

**PersonCount**
Contar la canitdad de personas
```gql
query{
  personCount
}
```

**PersonCount**
Buscar una Persona por su nombre
```gql
query{
  findPerson(name:"Jipson"){
    id
    name
    street
  }
}
```