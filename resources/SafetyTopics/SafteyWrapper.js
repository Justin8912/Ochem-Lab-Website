export default function Wrapper (props) {
  return (
    <>
      <div className={props.overallFormat}>
        <h1 className={props.headingFormat}>{props.sectionHeader}</h1>
        {props.postHeadingContent &&
          <p>{props.postHeadingContent}</p>
        }
        {props.listElements &&
          <>
            <ol className={props.olFormat}>
            {props.listElements.map((content, idx) => {
              return (
                <li key={idx}>{content}</li>
              )
            })}
            </ol>
          </>
        }
        {props.indSections &&
          <>
            {Object.keys(props.indSections).map((key, idx) => {
              console.log(key, idx)
              return (
                <>
                  <h2 className={props.headingFormat} key={idx}>{key}</h2>
                  <ol className={props.olFormat}>
                    {props.indSections[key].map((listContent, ydx) => {
                      return (
                        <li key={ydx}>{listContent}</li>
                      )
                    })}
                  </ol>
                </>
              )
            })}
          </>
        }
      </div>
    </>
  )
}