export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenges: string;
  duration: string;
  year: string;
  client: string;
  role: string;
  tools: string[];
  projectUrl?: string;
  videoLink: string; // YouTube embed link
  thumbnail: string;
}

export const projectsData: Project[] = [
  {
    id: "neon-cyberpunk",
    title: "NEON CYBERPUNK CITYSHOW",
    category: "3D Environment & Motion",
    description: "An immersive 3D futuristic cityscape animation featuring dynamic neon lighting, volumetric fog, and hovercraft physics simulations. Built to demonstrate high-fidelity sci-fi world-building, utilizing detailed structural designs, emissive shader networks, and custom animated traffic vectors.",
    challenges: "Handling thousands of instanced volumetric emissions and reflections without inflating render times. Resolved by using light baking techniques, screen-space reflections optimisations, and Blender's Octree system for viewport culling.",
    duration: "6 Weeks",
    year: "2026",
    client: "CyberVibe Games",
    role: "Lead 3D & Lighting Artist",
    tools: ["Blender", "After Effects", "Substance Painter", "Cycles Render"],
    projectUrl: "https://behance.net/himel-cyberpunk",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Rickroll as high-fidelity placeholder video
    thumbnail: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "liquid-gold",
    title: "LIQUID GOLD // REEL AD",
    category: "Product Simulation & VFX",
    description: "A high-end commercial concept showcasing liquid physics dynamics, high-refractive glass shaders, and luxury brand design aesthetic. Designed to represent a liquid flow animation wrapping around a floating premium black-gold perfume bottle in a clean, ambient studio environment.",
    challenges: "Achieving realistic fluid surface tension, droplet dispersion, and viscosity settings. Resolved by leveraging FLIP Fluids simulation solvers inside Blender, and rendering glass reflections with Octane Render's spectral depth paths.",
    duration: "3 Weeks",
    year: "2025",
    client: "Aura Fragrances",
    role: "CGI & Fluid Dynamics Simulation",
    tools: ["Cinema 4D", "Octane Render", "Houdini", "DaVinci Resolve"],
    projectUrl: "https://vimeo.com/himel-liquid-gold",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mechanical-titan",
    title: "MECHANICAL TITAN // VFX",
    category: "CGI Character Integration",
    description: "Integrating a fully rigged mechanical robot into real-world video footage. This project details matchmoving, camera tracking, dynamic shadow catching, and photorealistic composite color matching to ensure the CGI character sits perfectly in the physical environment.",
    challenges: "Aligning CG lighting environment perfectly with the source video plate. Solved by creating a custom 32-bit high dynamic range (HDR) map on-location, camera calibration tracking using Blender's Tracker system, and complex Nuke compositing scripts.",
    duration: "5 Weeks",
    year: "2026",
    client: "NeoMech Studios",
    role: "Lead Compositor & CGI Artist",
    tools: ["Blender", "Nuke", "After Effects", "DaVinci Resolve"],
    projectUrl: "https://github.com/himel-mechanical-titan",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
];
