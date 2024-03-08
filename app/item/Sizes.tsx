export default function Sizes ({ skus }) {

  return (
    <div>
      {
        Object.keys(skus).map(function(keyName, keyIndex){
          return(
            <div>
              <span>{skus[keyName].size}</span>
            </div>
          )
        })
      }
    </div>
  )
}