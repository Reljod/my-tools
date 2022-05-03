import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="#">My Tools</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/productivity/pomodoro">
              <a className="nav-link">Pomodoro</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/sample">
              <a className="nav-link">Sample</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}