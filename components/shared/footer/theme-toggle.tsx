'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuLabel, 
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, Monitor } from 'lucide-react';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                    {theme === 'system' ? (
                        <Monitor />
                    ) : theme === 'dark' ? (
                        <MoonIcon />
                    ) : (
                        <SunIcon />
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem 
                    checked={theme === 'system'} 
                    onClick={() => setTheme('system')}
                    className="focus:ring-0 focus-visible:ring-0 focus:ring-offset-0"
                >
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    checked={theme === 'light'} 
                    onClick={() => setTheme('light')}
                    className="focus:ring-0 focus-visible:ring-0 focus:ring-offset-0"
                >
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem 
                    checked={theme === 'dark'} 
                    onClick={() => setTheme('dark')}
                    className="focus:ring-0 focus-visible:ring-0 focus:ring-offset-0"
                >
                    Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ThemeToggle;
