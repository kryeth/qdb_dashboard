import { useState, useEffect } from 'react';
import axios from 'axios';

interface UserProfile {
    id: number;
    name: string;
    email: string;
}

export const useProfile = (userId: number) => {
    const [profile, setProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/users/${userId}`
                );
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, [userId]);

    return profile;
};
