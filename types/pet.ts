export type Pet = {
    id: number;
    organization_id: string;
    organization: string;
    url: string;

    type: string;
    species: string;
    breed: {
        primary: string;
        secondary: string | null;
        mixed: boolean;
        unknown: boolean;
    };
    colors: {
        primary: string;
        secondary: string | null;
        tertiary: string | null;
    };
    age: string;
    gender: string;
    size: string;
    coat: string;
    name: string;
    description: string;

    primary_photo_cropped: {
        small: string;
        medium: string;
        large: string;
        full: string;
    } | null;
    photos: Array<{
        small: string;
        medium: string;
        large: string;
        full: string;
    }>;
    videos: Array<{
        embed: string;
    }>;

    status: "adoptable" | unknown;
    attributes: {
        spayed_neutered: boolean;
        house_trained: boolean;
        declawed: boolean;
        special_needs: boolean;
        shots_current: boolean;
    }
    environment: {

    }

    good_with_children: boolean;
    good_with_dogs: boolean;
    good_with_cats: boolean;
    location: string;
    distance: number | null;
    before: string;
    after: string;
    sort: string;
    page: number;
    limit: number;
}