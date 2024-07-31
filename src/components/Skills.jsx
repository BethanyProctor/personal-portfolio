import Frontend from './frontend-skills'
import Backend from './backend-skills'

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2>About Me</h2>
            <h5>My Coding Qualifications</h5>

            <div className="skills__container container grid">
               <Frontend />
               <Backend />
            </div>
        </section>
    )
}