/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type: 'group',
        children: [
            {
                id: 'dashboards.analytics',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:presentation-chart-bar',
                link: '/home'
            },
        ]
    },
    {
        id: 'packages',
        title: 'Packages',
        subtitle: 'Manage packages',
        type: 'group',
        children: [
            {
                id: 'packages.plans',
                title: 'Plans',
                type: 'basic',
                icon: 'feather:shopping-bag',
                link: '/plans'
            },
        ]
    },
    {
        id: 'content',
        title: 'Content Management',
        subtitle: 'Hompage content and banners',
        type: 'group',
        children: [
            {
                id: 'content.services',
                title: 'Other Services',
                type: 'basic',
                icon: 'mat_outline:home_repair_service',
                link: '/services'
            },
            {
                id: 'content.promotions',
                title: 'Promotions',
                type: 'basic',
                icon: 'heroicons_outline:gift',
                link: '/promotions'
            },
            {
                id: 'content.deals',
                title: 'Best Deals',
                type: 'basic',
                icon: 'heroicons_outline:tag',
                link: '/deals'
            }
        ]
    },
    {
        id: 'setting',
        title: 'Setting',
        subtitle: 'Manage settings',
        type: 'group',
        children: [
            {
                id: 'setting',
                title: 'Setting',
                type: 'basic',
                icon: 'feather:settings',
                link: '/setting'
            },
        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
