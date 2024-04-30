
export interface DataFetched {
    success: boolean,
    message: string,
    data: any
}

export interface PokemonData {
    base_happiness: number,
    capture_rate: number,
    color: Color,
    egg_groups : Egg_Group[],
    evolution_chain: Evolution_Chain,
    evolves_from_species: any,
    flavor_text_entries: Flavor_Text_Entries,
    form_descriptions: any[],
    gender_rate: number,
    genera: Genera,
    generation: Generation,
    growth_rate: Growth_Rate,
    habitat: Habitat,
    has_gender_differences: boolean,
    hatch_counter: number,
    id: number,
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    name: "string",
    names: Names[],
    order: number,
    pal_park_encounters: Pal_Park_Encounters,
    pokedex_numbers: Pokedex_Numbers,
    shape: Shape,
    varieties: Varieties

}

export interface Color {
    name: "string",
    url: "string"
}

export interface Egg_Group {
    name: "string",
    url: "string"
}

export interface Evolution_Chain {
    url: "string"
}

export interface Flavor_Text_Entries {
    flavor_text: "string",
    language : Language,
    version: Version
}

export interface Language {
    name: "string",
    url: "string"
}

export interface Version {
    name: "string",
    url: "string"
}

export interface Genera {
    genus: "string",
    language: Language
}

export interface Generation {
    name: "string",
    url: "string"
}

export interface Growth_Rate {
    name: "string",
    url: "string"
}

export interface Habitat {
    name: "string",
    url: "string"
}

export interface Names {
    language: Language,
    name: "string"
}

export interface Pal_Park_Encounters {
    area: Area,
    base_score: number,
    rate: number
}

export interface Area {
    name: "string",
    url: "string"
}

export interface Pokedex_Numbers {
    entry_number: number,
    pokedex: Pokedex
}

export interface Pokedex {
    name: "string",
    url: "string"
}

export interface Shape {
    name: "string",
    url: "string"
}

export interface Varieties {
    is_default: boolean,
    pokemon: Pokemon
}

export interface Pokemon {
    name: "string",
    url: "string"
}