function Card({key,title,director,year}) {

    return (
        <>
        <div className="col-sm-4">
            <div className="card mt-3 shadow">
                <div className="card-header p-0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbfcF-ZhqczECYgtTTXKVLqHkm4LrvqI7Lw&s" className="img-fluid w-100" alt="" />
                </div>
                <div className="card-body">
                    <h5>{title} {year && `(${year})`}</h5>
                    <i>By</i> {director}
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Card