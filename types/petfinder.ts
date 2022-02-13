export type PetfinderToken = {
    token_type: string;
    expired_in: number;
    access_token: string;
}

export type PetfinderTokenForm = {
    grant_type: "client_credentials";
    client_id: string;
    client_secret: string;
}

export type PetfinderPets = {
    animals: Array<Pet>;
    pagination: {
        count_per_page: number;
        total_count: number;
        current_page: number;
        total_pages: number;
    }
}