import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'reactstrap'
const Task = props => {
    const { title, color, icon, tasks } = props
    return (
        <div className="card">
            <div className={`card-header d-flex align-items-center justify-content-between ${color} text-white`}>
                <h3>{title}</h3>
                <ion-icon name={icon} style={{ fontSize: '25px' }}></ion-icon>
            </div>
            {title === 'Tasks got done' ?
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    {tasks.map((task, index) => {
                        return <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`panelsStayOpen-headingTwo-${index}`}>
                                <button className="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse-${index}`}
                                    aria-expanded="false" aria-controls={`panelsStayOpen-collapse-${index}`}>
                                    {task.title}
                                </button>
                            </h2>
                            <div id={`panelsStayOpen-collapse-${index}`} className="accordion-collapse collapse"
                                aria-labelledby={`panelsStayOpen-heading-${index}`}>
                                <div className="accordion-body">
                                    <div className="card text-dark bg-light mb-3" >
                                        <div className="card-header" style={{ textTransform: 'capitalize', fontSize: '22px' }}>
                                            <Link className='text-decoration-none text-black' to={`/dashboard/edit/${task.id}`}>{task.title} detail view</Link> </div>
                                        <div className="card-body">

                                            <p className="card-text d-flex align-items-center justify-content-between">
                                                <strong className="card-title">Title:</strong>
                                                <Input disabled value={task.title} />
                                            </p>
                                            <p className="card-text d-flex align-items-center justify-content-between">
                                                <strong className="card-title">Description:</strong>
                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} value={task.description} disabled />
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    })}

                </div>

                :
                <ul className="list-group" style={{ margin: '1rem' }}>
                    {tasks.map((task, index) => {
                        return <li className="list-group-item" key={index}>
                            <Link className='text-decoration-none text-black' to={`/dashboard/edit/${task.id}`}>{task.title}</Link>
                        </li>
                    })}
                    {title === 'New Tasks' ? <Link to='/dashboard/add' className="btn btn-primary d-flex align-items-center" style={{ width: '100px', marginTop: '1rem' }}>
                        <ion-icon name="list" style={{ fontSize: '25px', marginRight: '0.5rem' }}></ion-icon>
                        Add
                    </Link> : null}
                </ul>
            }
        </div>
    )
}



Task.propTypes = {
    title: PropTypes.string,
    tasks: PropTypes.array
}

export default Task
