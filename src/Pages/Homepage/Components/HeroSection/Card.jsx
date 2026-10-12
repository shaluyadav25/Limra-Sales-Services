const Card = ({number,title}) => {
  return (
    <>
    <div className="bg-linear-to-r from-[#074662] to-[#077DAC] w-70 h-30 flex items-center justify-center text-white rounded-2xl p-3 mb-7">
        <div>
        <h1 className="font-medium text-3xl">{number}</h1>
        <p className="font-normal text-lg">{title}</p>
        </div>
    </div>
    </>
  )
}

export default Card