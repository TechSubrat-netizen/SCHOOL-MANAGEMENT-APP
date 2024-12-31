import HeadCount from "../Components/HeadCount"


function Admin() {
  return (
    <div className="flex item-center justify-between">
      <div className="flex flex-col items-center justify-center w-2/3 h-full">
      {/* Count Components */}
      <div className=" flex justify-evenly w-full items-center mt-10">
        <HeadCount type="Students" count="200"></HeadCount>
        <HeadCount type="Teachers" count="200"></HeadCount>
        <HeadCount type="Subjects" count="200"></HeadCount>
        <HeadCount type="Staffs" count="200"></HeadCount>
      </div>
      </div>
    </div>
  )
}

export default Admin