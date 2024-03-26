export default function Sizes ({ skus }) {

  return (
    <div className="flex flex-row">
      {
        Object.keys(skus).map(function(keyName){
          return(
            <div className="px-[5px] ml-[-5px]">
              <button className="bg-[#cdc6ae] hover:bg-[#99937f] focus:bg-[#99937f] text-white font-bold py-2 px-4 border border-[#cdc6ae] rounded text-sm lg:text-lg">{skus[keyName].size}</button>
            </div>
          )
        })
      }
    </div>
  )
}