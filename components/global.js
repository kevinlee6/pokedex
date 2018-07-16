function changeData(pokemon) {
    idAndName.textContent = `${pokemon.id} · ${pokemon.name.toUpperCase()}`;

    type.textContent = pokemon.type.map(x=>x.toUpperCase()).join('/');

    img.setAttribute('src', pokemon.photo);

    description.textContent = pokemon.description;
};