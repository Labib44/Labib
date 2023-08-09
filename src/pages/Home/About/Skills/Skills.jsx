import './Skills.css';

const Skills = () => {
    return (
        <div className='py-5'>
            <div className="skill-box">
                <span className="title">Development</span>
                <div className="skill-bar">
                    <span className="skill-per development">
                        <span className="tooltip">95%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Design</span>
                <div className="skill-bar">
                    <span className="skill-per design">
                        <span className="tooltip">80%</span>
                    </span>
                </div>
            </div>
            <div className="skill-box">
                <span className="title">Branding</span>
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