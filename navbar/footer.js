import Image from 'next/image';
import footerImg from '../resources/header.svg'
import Link from 'next/link';

export default function Footer (props) {
  return (
    <>
      <footer
        className="burntOrange text-center lg:text-left mt-20 max-h-max max-w-max">
        <div className="mx-20 md:mx-80 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="">
              <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <Image
                  src={footerImg}
                  height={50}
                  width={50}
                  alt={'Footer image'}
                  className='pr-2'
                />
                Organic Chemistry Labs
              </h6>
              <p>
              Please direct any comments or questions you may have about this web site to Dr. Conrad Fjetland.
              </p>
            </div>
            <div className="">
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <Link href="https://quest.cns.utexas.edu/" className="hover:text-slate-200"
                  >Quest</Link>
              </p>
              <p className="mb-4">
                <Link href="https://www.turnitin.com/" className="hover:text-slate-200"
                  >Turnitin</Link>
              </p>
              <p>
                <Link href="https://canvas.utexas.edu/" className="hover:text-slate-200"
                  >Canvas</Link>
              </p>
            </div>
            <div>
              <h6
                className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
              </svg>
              &nbsp; &nbsp; NHB 1.128
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5">
                  <path
                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                crfjetland@cm.utexas.edu
              </p>

            </div>
          </div>
        </div>
          </footer>
    </>
  )
}