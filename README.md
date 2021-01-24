# React Hooks and Mapbox Starter - ⚛️ + 🗺️ 

## Mapbox with functional components and [React hooks](https://reactjs.org/docs/hooks-reference.html).

1. `git clone`

2. Add your Mapbox [access token](https://docs.mapbox.com/help/glossary/access-token) to `index.js`. 

3. `yarn`

4. `yarn start`

5. `localhost:3000` 🤙

### Using `useState`, `useEffect`, and `useRef`. 

We can build functional components that let Mapbox handle the map logic, while React watches for state and data changes.

Mapbox's [class-based](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/#set-the-apps-default-state) implementation used `ComponentDidMount()`.

With hooks, we can store use the `useState` and `useEffect` hooks instead, like this:

```
  const [zoom, setZoom] = useState(2)

  .......

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapNode.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      centerr: [lng, lat],
      zoom: zoom
    })

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

```

The [entry point to initialize a Mapbox map](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/#render-the-map) is through a single DOM element, which is typically provided in a React context through a statement in the render method.

We're targeting the entry point for our map with a [ref](https://reactjs.org/docs/refs-and-the-dom.html#:~:text=Refs%20provide%20a%20way%20to,render%20it%20with%20new%20props.) -- `mapNode.current`. 

Create a ref to target with `useRef`, and assign it an initial value of `null`. 

```const mapNode = useRef(null)```

`mapNode` becomes an object with a property of `.current`, which points to that DOM node.

 `useRef` allows us to keep values around across the entire lifespan of the component, grab the DOM nodes we need to target and make imperative changes to it -- like provide an entry point for a Mapbox map. 

 ✨✨✨

 ![](mapbox-react-hooks.gif)

