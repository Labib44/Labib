import { useTheme } from '../../../../context/ThemeProvider/ThemeProvider';
import './Skills.css';

const Skills = () => {
    const { isDark } = useTheme();
    return (
        <div className='py-5'>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>Development</span>
                <div className="skill-bar">
                    <span className="skill-per development">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>Design</span>
                <div className="skill-bar">
                    <span className="skill-per design">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className={`" title " ${!isDark ? "text-white" : " "}`}>Branding</span>
                <div className="skill-bar">
                    <span className="skill-per branding">
                        <span className="tooltip">75%</span>
                    </span>
                </div>
            </div>

        </div>

    );
};

export default Skills;