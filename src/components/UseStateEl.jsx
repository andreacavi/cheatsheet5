export default function UsestateEl() {
  return (
    <>
      <h1>React Hook | useState</h1>
      <p>
        The useState hook is a built-in React hook that allows functional
        components to manage state.
      </p>
      <h2>Step 1: Importing useState</h2>
      <p>
        To use the useState hook, you need to import it from the 'react'
        package.
      </p>
      <img
        src="https://i.ibb.co/Vq7k7jZ/import-usestate.png"
        alt="Import useState code"
      ></img>
      <h2>Step 2: Using useState</h2>
      <p>
        Call the useState hook inside your functional component to declare state
        variables. It returns an array with two elements: the current state
        value and a function to update that value.
      </p>
      <img
        src="https://i.ibb.co/ZY5FYKH/usestate-example.png"
        alt="useState example code"
      ></img>
      <h2>Step 3: Initializing State</h2>
      <p>
        Pass the initial state value to useState as an argument. This initial
        value will be used when the component is first rendered.
      </p>
      <img
        src="https://i.ibb.co/7pKvBRz/usestate-initial.png"
        alt="Initializing state with useState"
      ></img>
      <h2>Step 4: Updating State</h2>
      <p>
        Use the function returned by useState to update the state value. You can
        pass a new value directly, or use a function that receives the previous
        state value and returns the new state value.
      </p>
      <img
        src="https://i.ibb.co/VHpL7Jr/usestate-update.png"
        alt="Updating state with useState"
      ></img>
      <div>
        <h2>More infos provided in the youtube link</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O6P86uwfdR0?si=9QQ6Y-I3ZtSY_QsL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
