import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import SkillsSection from '../components/SkillsSection';
import JobRoles from '../components/JobRoles';
import ProjectsGrid from '../components/ProjectsGrid';
import Certifications from '../components/Certifications';
import Extracurriculars from '../components/Extracurriculars';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div className="page-container">
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            <JobRoles />
            <ProjectsGrid />
            <Certifications />
            <Extracurriculars />
            <ContactForm />
        </div>
    );
};

export default Home;
