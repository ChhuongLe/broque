export default function Sizes ({ skus }) {

  return (
    <div className="flex flex-row">
      {
        Object.keys(skus).map(function(keyName){
          return(
            <div className="px-[5px] ml-[-5px]">
              <button className="bg-[#cdc6ae] hover:bg-[#cdc6ae] text-white font-bold py-2 px-4 border border-[#cdc6ae] rounded">{skus[keyName].size}</button>
            </div>
          )
        })
      }
    </div>
  )
}