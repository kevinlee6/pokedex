export default class {
  constructor({
    name,
    id,
    hp,
    atk,
    def,
    abil,
    type,
    photo,
    moves,
    height,
    weight,
  }) {
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.abil = abil;
    this.type = type;
    this.photo = photo;
    this.moves = moves;
    this.height = height;
    this.weight = weight;
    this.description = '';
  }
}
