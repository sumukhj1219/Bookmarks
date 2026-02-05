import { Compass, Folder, Home, PlusCircle, Settings, TimerReset } from "lucide-react";

export const sidebarConfig = [
    {
        id:1,
        label:"Home",
        icon: Home,
        url:"/"
    },
    {
        id:2,
        label:"Categories",
        icon:Folder,
        url:"/categories"
    },
    {
        id:3,
        label:"Frequent",
        icon:TimerReset,
        url:"/frequent"
    },
    {
        id:4,
        label:"Explore",
        icon:Compass,
        url:"/explore"
    },
    {
        id:5,
        label:"Add Bookmark",
        icon:PlusCircle,
        url:"/add-bookmark"
    },
    {
        id:6,
        label:"Settings",
        icon:Settings,
        url:"/settings"
    }
]