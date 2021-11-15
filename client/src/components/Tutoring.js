import React from 'react'

function Tutoring({title, author, cost}) {
    return (
        <div>
            <div className="col-10 col-md-8 col-lg-7">
                <div className="card mb-4 shadow">
                    <div className="card-body card-text">
                        {title}
                        {cost}
                    </div>
                    <div className="card-footer small text-muted text-right">
                    { author }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tutoring
