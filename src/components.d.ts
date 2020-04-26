/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppNav {
    }
    interface AppPage {
        /**
          * Language and Page url come here
         */
        "match": MatchResults;
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppNavElement extends Components.AppNav, HTMLStencilElement {
    }
    var HTMLAppNavElement: {
        prototype: HTMLAppNavElement;
        new (): HTMLAppNavElement;
    };
    interface HTMLAppPageElement extends Components.AppPage, HTMLStencilElement {
    }
    var HTMLAppPageElement: {
        prototype: HTMLAppPageElement;
        new (): HTMLAppPageElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-nav": HTMLAppNavElement;
        "app-page": HTMLAppPageElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppNav {
    }
    interface AppPage {
        /**
          * Language and Page url come here
         */
        "match"?: MatchResults;
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-nav": AppNav;
        "app-page": AppPage;
        "app-profile": AppProfile;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-nav": LocalJSX.AppNav & JSXBase.HTMLAttributes<HTMLAppNavElement>;
            "app-page": LocalJSX.AppPage & JSXBase.HTMLAttributes<HTMLAppPageElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}