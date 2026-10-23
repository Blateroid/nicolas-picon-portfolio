import { empireGalleries, empireVideo } from '@/lib/empire-media';

export const empireStory = {
  galleries: empireGalleries,
  video: empireVideo,
  hook: 'I started in R&D. Over four years, my responsibilities grew to running operations and shaping the product roadmap.',
  summary: 'Grew from R&D engineering into production and business operations, then technical product management at a startup building rapid cleanliness-testing systems.',
  introduction: 'Empire Bio Diagnostics develops rapid cleanliness-testing systems that combine a physical device with software. I joined in July 2020 as an R&D Engineer and stayed through August 2024. My work expanded from experiments and testing into team leadership, operating budgets, and product decisions.',
  chronology: 'The roles overlapped as my responsibilities grew. I managed production while still working in R&D, and later took on technical product management while continuing to lead business operations.',
  chapters: [
    {
      id: 'engineering', label: 'Engineering', title: 'Starting with the device, software, and lab',
      roles: [{ title: 'R&D Engineer', dates: 'Jul 2020 – Sep 2022' }],
      paragraphs: [
        'I began close to the technology: developing automation programs, testing the handheld device and web application software, and running repeatable laboratory experiments. The work covered both the physical testing system and the software people used with it.',
        'This was the technical foundation for my later responsibilities. Before owning roadmaps and launch requirements, I had worked directly on testing the components those decisions would depend on.',
      ],
    },
    {
      id: 'operations', label: 'Operations', title: 'Taking responsibility for production and the business',
      roles: [
        { title: 'Production Manager', dates: 'Sep 2021 – Sep 2022' },
        { title: 'Business Operations Manager', dates: 'Sep 2022 – Apr 2024' },
      ],
      paragraphs: [
        'In September 2021, my scope expanded into production management alongside R&D. I led a 12-person team and built production forecasts. During that role, production efficiency improved from 80% to 95%.',
        'A year later, I became Business Operations Manager. I led 27 operators, managed a $6 million annual operating budget, and introduced operational upgrades that reduced production costs by 20%.',
        'The scale of my responsibility had changed. I was now accountable for a larger team and the economics of production, adding an operating perspective to the technical work I had started with.',
      ],
    },
    {
      id: 'product', label: 'Product', title: 'Moving into product ownership',
      roles: [{ title: 'Technical Product Manager', dates: 'Apr 2023 – Aug 2024' }],
      paragraphs: [
        'In April 2023, I took on technical product management while continuing in business operations. My scope now included customer discovery, product roadmaps, launch requirements, and pricing. I owned ten web launches delivered on schedule and under budget.',
        'The work connected customer needs to decisions about what to build, how to bring it to market, and what to charge. My engineering and operations responsibilities gave me context for those choices across the device, software, and production.',
        'Product ownership also included helping people use the system. I created an illustrated activation guide for hospital teams setting up ATP Complete 2. The workflow moved from generating a code on the website to registering and logging in on the handheld. I paired short instructions with annotated screenshots to make each next action clear.',
      ],
    },
  ],
  closing: {
    title: 'A broader view of the product',
    text: 'By the end of my time at Empire, I had worked on the technology, led the operation behind it, and owned product decisions and launches. My path into product management came through those connected responsibilities: testing the system, understanding what it takes to produce it, and helping customers put it to use.',
  },
};
