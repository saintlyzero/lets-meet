import { v4 as uuidv4 } from "uuid";

class Person {
  constructor(name, startDate, endDate) {
    this.id = uuidv4();
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default Person;
