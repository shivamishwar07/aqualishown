export type MenuItem = {
    label: string;
    type?: "mega" | "dropdown";
    categories?: {
        title: string;
        icon?: string;
        links: { name: string; href: string }[];
    }[];
    links?: { name: string; href: string }[];
};

export const menuData: MenuItem[] = [
    {
        label: "Services & Products",
        type: "mega",
        categories: [
            {
                title: "Operational Excellence",
                icon: "⚙️",
                links: [
                    { name: "Process automation", href: "/process-automation" },
                    { name: "Core systems implementation", href: "/core-systems" },
                    { name: "Digitalisation", href: "/digitalisation" },
                    { name: "Data Management", href: "/data-management" },
                ],
            },
            {
                title: "Technical Excellence",
                icon: "🧠",
                links: [
                    { name: "Agile & DevOps mindset", href: "/devops" },
                    { name: "QA Automation", href: "/qa" },
                    { name: "Cloud consulting", href: "/cloud" },
                ],
            },
        ],
    },
    {
        label: "Industries",
        type: "mega",
        categories: [
            {
                title: "Insurance",
                icon: "🛡️",
                links: [
                    { name: "Insurance", href: "/industries/insurance" },
                    { name: "Policy administration", href: "/industries/policy-admin" },
                    { name: "Claims handling", href: "/industries/claims" },
                    { name: "Underwriting transformation", href: "/industries/underwriting" },
                    { name: "Data and finance in insurance", href: "/industries/data-finance" },
                    { name: "Digital insurance", href: "/industries/digital-insurance" },
                ],
            },
            {
                title: "Banking & Financial",
                icon: "🏦",
                links: [
                    { name: "Banking", href: "/industries/banking" },
                    { name: "Other financial", href: "/industries/financial" },
                ],
            },
        ],
    },
    {
        label: "About Us",
        type: "mega",
        categories: [
            {
                title: "About",
                icon: "ℹ️",
                links: [
                    { name: "About Sollers", href: "/about/sollers" },
                    { name: "25 Years Anniversary", href: "/about/25-years" },
                    { name: "R&D Lab", href: "/about/rd-lab" },
                    { name: "Partnership", href: "/about/partnership" },
                ],
            },
            {
                title: "Insights",
                icon: "📚",
                links: [
                    { name: "Media", href: "/about/media" },
                    { name: "Agile", href: "/about/agile" },
                    { name: "ESG - Driven by Responsibility", href: "/about/esg" },
                ],
            },
        ],
    },
    {
        label: "Career",
    },
    {
        label: "Contact us",
    },
];
