import SubHeroSecti from '../assets/styles/SubHeroSection.css'

function SubHeroSection({title, navigateTo}) {
  return (
        <div className="subhero-content flex flex-col justify-center items-center gap-1 h-96 py-10">
            <h1 className="text-4xl text-textcolor-primary font-bold">{title}</h1>
            <div>
                <p><span className="text-textcolor-secondary">{navigateTo}</span> <span className="text-textcolor-secondary">||</span> <span className="text-textcolor-primary">{title}</span></p>
            </div>
        </div>
  )
}

export default SubHeroSection