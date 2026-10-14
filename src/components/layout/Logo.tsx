import logo from '../../assets/images/logo/logo-kelvra.png'

export function Logo() {
  return (
    <a className="logo" href="#inicio">
      <img src={logo} alt="KELVRA — Desenvolvimento Web" width={297} height={407} decoding="async" />
    </a>
  )
}
