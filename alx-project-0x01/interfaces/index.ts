// Post interface
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// User interface
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

// Address interface for user props
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

// Geo interface for Address
interface Geo {
    lat: string;
    lng: string;
}

// Company interface for UserProps
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Post data interface
export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

// Post modal props interface
export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}