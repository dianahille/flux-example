import { Dispatcher } from 'flux';
/**
 * facebook.github.io/flux: "AppDispatcher" is used to broadcast payloads to
 * registered callbacks. Keep the Dispatcher as simple as possible and reuse the
 * dispatcher instead of creating a new one every time.
 * 
 * The dispatcher is necessary to inform a store about called actions and let the
 * store take the controlled about how it changes its state afterwards. To use the
 * dispatcher you have to register the store and tell the action creator to dispatch
 * a certain action.
 *
 * @author    Tobias Wolf <wolf@b1-systems.de>
 * @copyright 2007-2018 Horde LLC
 * @package   Teams
 * @license   http://www.horde.org/licenses/gpl GPL
 */
// tslint:disable-next-line:no-any
class AppDispatcher extends Dispatcher<any> {

    /**
     * Singleton method to access the initialized app dispatcher instance.
     *
     * @return Initialized app dispatcher instance
     */
    public static getInstance() {
        if (!this.dispatcher) {
            this.dispatcher = new Dispatcher();
        }

        return this.dispatcher;
    }
    /**
     * Initialized app dispatcher
     */
    // tslint:disable-next-line:no-any
    protected static dispatcher: Dispatcher<any>;

}

export default AppDispatcher;