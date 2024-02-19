export default function useContextEl() {
  return (
    <div>
      <h1> React Hook | useContext </h1>
      <br />
      <p>
        The &quot;useContext&quot; hook in React allows us to access the value
        of a context that has been created using the
        &quot;React.createContext&quot; function. You can use useContext
        whenever you need to access context values in functional components. It
        's particularly useful for avoiding prop drilling, where you'd otherwise
        need to pass props down multiple levels of your component tree. Context
        is often used for providing theme information, user authentication, and
        other application-wide data.
      </p>
      <br />
      <br />
      <h2> How to use &quot; useContext &quot;</h2>
      <br />
      <p>
        <h3>Create a Context:</h3>
        <br />
        Use the React.createContext() function to create a new context. This
        function returns an object with Provider and Consumer components. And
        import &quot;createContext&quot; from &quot;react&quot;.
      </p>
      <br />
      <img
        style={{ width: "500px", height: "500" }}
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*B7ZqFUlrPD5r5rEjptQbrA.png"
        alt="context"
      />
      <br />
      <br />
      <p>
        <h4> *line 1</h4> we import createContext from react <br />
        <h4> *line 4</h4> we assign StateContext to createContext and we invoked
        it immediately <br />
        <h4>*line 9</h4> We will create a state called filmsusing the useState
        hook. The useState hook will return the current value of the filmsand a
        function which we can use to update the films. <br />
        <h4>*line 12</h4> we wrap everything with StateContext that we called in
        the line 4, Every Context object comes with a Provider React component
        that allows consuming components to subscribe to context changes.
        Accepts a value prop to be passed to consuming components that are
        descendants of this Provider. One Provider can be connected to many
        consumers. Providers can be nested to override values deeper within the
        tree.
      </p>
      <br />
      <br />
      <img
        style={{ width: "500px", height: "500" }}
        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*o85ixSgJQZUjAv1kzYNfpg.png"
        alt="context1"
      />
      <br />
      <br />
      <p>
        {" "}
        Now our main component in our case it called App , we rap everything
        with StateContext that we created earlier … Lets create other component
        to read to display all films
      </p>
      <br />
      <img
        style={{ width: "500px", height: "500" }}
        src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*5IdsacLz7kTXZPpNTHXbkg.png"
        alt="context1"
      />
      <br />
      <br />
      <p>
        {" "}
        We imported useContext from react, useContext accepts a context object
        (the value returned from React.createContext) and returns the current
        context value for that context. The current context value is determined
        by the value prop of the nearest &quot;StateContext.Provider&quot; above
        the calling component in the tree.
      </p>
      <br />
      <p>
        Follow this step-by-step YouTube guide about using react hook for
        creating dark mode on your website!
      </p>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L6iIBkrMFUE?si=ZRhpfWtnGMQdE159"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
