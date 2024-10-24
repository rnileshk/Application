import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="links">
          <h1>Useful Links</h1>
          <p><a href='/' alt=''>Home</a></p>
          <p><a href='/apply' alt="">Apply</a></p>
          <p><a href='/contact' alt="">Help</a></p>
          <p><a href='/' alt="">FAQS</a></p>
        </div>
        <div className="map">
          <h1>Locate Us</h1>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238129.6392479114!2d78.90769418700009!3d21.161326258506392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728980093361!5m2!1sen!2sin" style={{width: "300px", height: "300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="add">
          <h1>Contact</h1>
          <h2>
            <img src='call.svg' alt='' />
            <p>+91 1245789632</p>
          </h2>
          <h2>
            <img src='mail.svg' alt='' />
            <p>example@gmail.com</p>
          </h2>
          <h2>
            <img src='loc.svg' alt='' />
            <p>Nagpur Maharastra</p>
          </h2>
        </div>
      </div>
      <div className="social">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAARZJREFUWEftmOsNwjAMhH2TQDeBTWASYBLYBDahmxwYJSi4EQl9pRKx1F9Nk4/zObKBLCywMB6pQKmMRBUiuRaRXerjge9bABe7RweIpIKcBx6W+/kWwC1cHAM6isghd8eB604A9Lx3/BVQ+/Shf1QB9aV/vCKzKKQQe+sNJSCp3gyLZRagBoBCdaIEkCrTKWVPVgLoQ53gPls5qI3z0TwewrOGwzxFFLFpnNRDevM2BuhuFKlAxRX6WlU2PyRtCkf30K9ANJDlgNwVoAqFURQo1taMDhT+2lr2qV6sKlQVeilAsm+TXz1UzEPa1V1Tp0fe90lZ1qCoo4ptNXP4OqOxm4J1v1jkjdI5J0+5pv4dk1J3cQo9AE3kAjSciJ9jAAAAAElFTkSuQmCC" alt=""/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAVNJREFUWEftmOFNAzEMhf02gUmgm7BJ6SSFSYBJ2k0e91BSuSb0TrkEgnT+VSlx8vXZsZODDWYYjMc2oLmIFBUieWdmT3POK8fPAF7iGt+ASArkuHKzpe47AO9+cgno2cz2S1dcOe8AQPtd7N8CHcxM0j42Vq9KoSunxjlWBXSVeOkEnlbmTnavAhpOobOZvY6UQ42iU1ymKmRSyBcvVXGdNlmstCqqWVGN6/dDmi+/aFVAMYcuhRNTVcs7pGQ/AtjFXdPY2/QHIlRfIABSpGgkpaqgvPUD8rtIkRIcSQHlcMulL1BQQd38PoCqaftbRHegqEAsqrFxdwdSBfeJ++OBSMp1B+KtpCX56wptQOZl94VRoeI0uIVsBIXUWD9cKHKz/Kq0IUTxcXDLt7pSD3f9+HOgUlfuBbXooZgvYKULVUuwZU/pljvWrLV9jplTbTiFPgHIB1A0X8SC8wAAAABJRU5ErkJggg==" alt=''/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAfhJREFUWEftWItNAzEMtSehnQQ6SekkwCSUSTgm4ZjE8CL75KZpYpIiVegiVTo1H7+8Z79zy3Rjg28MD62AWooUGRKRRyLatDYPzk9ENDPz7M85AyQiAPI5GCy6/cDMxxagZyJ6ip44uO6FmRFvGSWG/g0g5MJv8+6qDEH7N2ZGcqYhIg/6uCciPLcAXgUQmEAyTloACIrgd0T0oZWDOXz32gA1DGhi5p2yUcs1sIdgs4gAFGykNIYAwTO2wZsjuGcSNlKSbwjQTmV6V4kQEB/LmxID/hLYl49uQHbwIhMzc9BEj8x8uCBdN6C0UUREr5iCaC7VciQtV/DII6z1oxuQyWWAfHKbhDXTToVARLls3YC2mit2Q5Mw+t7LGTbwQ4AQ3N/QcqMkRc5Weok6yYcBgXJUVN4F2M0NbCp19R24tZU6GMYo7vfooy9XC1zKlzPaNdkX5jSpS0baLRluDpbsdZBLgnkcnnobtQPkG9abXKHLRBlCnEuV4sFZ92dSpWpUd/8TY4wksAE0MLVK7JbMDocMXz9SoOVAIGszcpZ8N2DSlXyqG9DJRpUgNeiuBYEj+94owmY3IDPG+6zxSk2auzpYy9fUHLwbUO3QkbkVUIu9EEORZGwFis63fyiq08Jha51gNGBtHaxkqUpbuP770aJ2ZajF0DcH31M0AK5dAwAAAABJRU5ErkJggg==" alt=""/>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAlpJREFUWEftl0FqFUEQhv//HCFgCFnEhQvBvblBYshCXJgcQpAQNEFEJIfIC7pSFDxB4lpcqitjXIjHKOcfuh/jzHR3jTMPIqQhhMd0V39d9VdVN3HFBq8YD66BShFxe8jMbgDQ392S0cb3SwCXJM+9a4pAZrYL4MRrMDNPcKckD3O2kkDBIwIZ4hEPt8A2SOp/Z+SAzhYAEwHOSW64gSYMU85jeyRn7Qm9HjKzH0HAnhCU5hxVnpaoFX4lRRwS+4oXyEq7OL/PSO5prplJi5LBfLBSeBFoYLh0ep10FpJAm8oLT8NGcy8k7Ercf5WEDqETKJsprQyta1EiQTo66gNSnYgn7IvMPEPMbBXAHQA3FRUAXwF8InnhLBtH7br0L0C1m83sVkUr+K0W9TsdiOSXAKUESY3RQLVIzUzZcQxgO7HTWwCPqrk/zUzZpWrfN0YD1TE3s50qTG8KmbZN8n1fdjXWjQZaUck3sycAlGG5cUDyeSFso4Gifg4APCsA7ZN8sWgPRaB7ACTe3Ngk+aFQRkZ7KIp6GcBLAPcTRK8BPCb5a9GiVoGTsJX2a6FePWhBvZK+SH4vhEvLRntIRprtYAnAbQDroTB+A/CZ5G9NNLPSFcYF5LkhelqHYJrdvS+6rtbR6coJnQhKjfFj6FX6HQtgrvU0zbmaq06VK/eF5Br0ua5rzRWpC1op9oN2TU123YeCGD06GgvVCZcM/h+X/OAlaUme8grU67HkiyProWg9lP6HEzyJxj0U28dtPKXjk3qIR6Z7Snt3nWpe8W0/1UZeO9dAJU/9AZ0RIDSsMlLqAAAAAElFTkSuQmCC" alt=''/>
      </div>
      <div className="social">
        <p>ScholarsCreators © 2024. All Rights Reserved.</p>
      </div>
    </>
  )
}
