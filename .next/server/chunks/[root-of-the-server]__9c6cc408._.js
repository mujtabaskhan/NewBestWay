module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},29216,(e,t,r)=>{},86590,e=>{"use strict";e.s(["handler",()=>N,"patchFetch",()=>k,"routeModule",()=>R,"serverHooks",()=>A,"workAsyncStorage",()=>E,"workUnitAsyncStorage",()=>C],86590);var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),o=e.i(61916),s=e.i(69741),i=e.i(16795),l=e.i(87718),d=e.i(95169),p=e.i(47587),c=e.i(66012),u=e.i(70101),x=e.i(26937),g=e.i(10372),f=e.i(93695);e.i(52474);var h=e.i(220);e.s(["POST",()=>w],66122);var m=e.i(89171),y=e.i(29508);function v(e){let t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,e=>t[e])}async function w(e){try{let{name:t,email:r,phone:a,message:n,service:o}=await e.json(),s=v(t),i=v(r),l=a?v(a):"",d=v(n),p=o?v(o):"";if(!t||!r||!n)return m.NextResponse.json({error:"Name, email, and message are required"},{status:400});let c=y.default.createTransport({service:"gmail",auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD}}),u={from:process.env.GMAIL_USER,to:process.env.CONTACT_EMAIL||process.env.GMAIL_USER,replyTo:r,subject:`New Contact Form Submission${p?` - ${p}`:""}`,html:`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 20px 0;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #232061 0%, #1a1a4a 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                        New Contact Form Submission
                      </h1>
                      <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                        Veritas Accounting
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">

                      <!-- Contact Information Card -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #232061; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h2 style="margin: 0 0 20px 0; color: #232061; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Contact Information
                        </h2>
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Name:</strong>
                              <span style="color: #555555;">${s}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Email:</strong>
                              <a href="mailto:${r}" style="color: #232061; text-decoration: none; font-weight: 500;">${i}</a>
                            </td>
                          </tr>
                          ${l?`
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Phone:</strong>
                              <a href="tel:${a}" style="color: #232061; text-decoration: none; font-weight: 500;">${l}</a>
                            </td>
                          </tr>
                          `:""}
                          ${p?`
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Service:</strong>
                              <span style="background-color: #232061; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500; display: inline-block;">${p}</span>
                            </td>
                          </tr>
                          `:""}
                        </table>
                      </div>

                      <!-- Message Card -->
                      <div style="background-color: #ffffff; border: 2px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h2 style="margin: 0 0 15px 0; color: #232061; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Message
                        </h2>
                        <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-top: 15px;">
                          <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">${d}</p>
                        </div>
                      </div>

                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,text:`
New Contact Form Submission

Name: ${t}
Email: ${r}
${a?`Phone: ${a}`:""}
${o?`Service: ${o}`:""}

Message:
${n}

---
This email was sent from the Veritas Accounting contact form.
      `};return await c.sendMail(u),m.NextResponse.json({message:"Email sent successfully"},{status:200})}catch(e){return console.error("Error sending email:",e),m.NextResponse.json({error:"Failed to send email. Please try again later."},{status:500})}}var b=e.i(66122);let R=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/contact/route.ts",nextConfigOutput:"",userland:b}),{workAsyncStorage:E,workUnitAsyncStorage:C,serverHooks:A}=R;function k(){return(0,a.patchFetch)({workAsyncStorage:E,workUnitAsyncStorage:C})}async function N(e,t,a){var m;let y="/api/contact/route";y=y.replace(/\/index$/,"")||"/";let v=await R.prepare(e,t,{srcPage:y,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,params:b,nextConfig:E,isDraftMode:C,prerenderManifest:A,routerServerContext:k,isOnDemandRevalidate:N,revalidateOnlyGenerated:S,resolvedPathname:P}=v,T=(0,s.normalizeAppPath)(y),$=!!(A.dynamicRoutes[T]||A.routes[P]);if($&&!C){let e=!!A.routes[P],t=A.dynamicRoutes[T];if(t&&!1===t.fallback&&!e)throw new f.NoFallbackError}let _=null;!$||R.isDev||C||(_="/index"===(_=P)?"/":_);let q=!0===R.isDev||!$,O=$&&!q,j=e.method||"GET",M=(0,o.getTracer)(),I=M.getActiveScopeSpan(),U={params:b,prerenderManifest:A,renderOpts:{experimental:{cacheComponents:!!E.experimental.cacheComponents,authInterrupts:!!E.experimental.authInterrupts},supportsDynamicResponse:q,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:null==(m=E.experimental)?void 0:m.cacheLife,isRevalidate:O,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>R.onRequestError(e,t,a,k)},sharedContext:{buildId:w}},H=new i.NodeNextRequest(e),F=new i.NodeNextResponse(t),D=l.NextRequestAdapter.fromNodeNextRequest(H,(0,l.signalFromNodeResponse)(t));try{let s=async r=>R.handle(D,U).finally(()=>{if(!r)return;r.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=M.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route");if(n){let e=`${j} ${n}`;r.setAttributes({"next.route":n,"http.route":n,"next.span_name":e}),r.updateName(e)}else r.updateName(`${j} ${e.url}`)}),i=async o=>{var i,l;let d=async({previousCacheEntry:r})=>{try{if(!(0,n.getRequestMeta)(e,"minimalMode")&&N&&S&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await s(o);e.fetchMetrics=U.renderOpts.fetchMetrics;let l=U.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=U.renderOpts.collectedTags;if(!$)return await (0,c.sendResponse)(H,F,i,U.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,u.toNodeOutgoingHttpHeaders)(i.headers);d&&(t[g.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==U.renderOpts.collectedRevalidate&&!(U.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&U.renderOpts.collectedRevalidate,a=void 0===U.renderOpts.collectedExpire||U.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:U.renderOpts.collectedExpire;return{value:{kind:h.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:y,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isRevalidate:O,isOnDemandRevalidate:N})},k),t}},f=await R.handleResponse({req:e,nextConfig:E,cacheKey:_,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:A,isRoutePPREnabled:!1,isOnDemandRevalidate:N,revalidateOnlyGenerated:S,responseGenerator:d,waitUntil:a.waitUntil});if(!$)return null;if((null==f||null==(i=f.value)?void 0:i.kind)!==h.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==f||null==(l=f.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,n.getRequestMeta)(e,"minimalMode")||t.setHeader("x-nextjs-cache",N?"REVALIDATED":f.isMiss?"MISS":f.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,u.fromNodeOutgoingHttpHeaders)(f.value.headers);return(0,n.getRequestMeta)(e,"minimalMode")&&$||m.delete(g.NEXT_CACHE_TAGS_HEADER),!f.cacheControl||t.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,x.getCacheControlHeader)(f.cacheControl)),await (0,c.sendResponse)(H,F,new Response(f.value.body,{headers:m,status:f.value.status||200})),null};I?await i(I):await M.withPropagatedContext(e.headers,()=>M.trace(d.BaseServerSpan.handleRequest,{spanName:`${j} ${e.url}`,kind:o.SpanKind.SERVER,attributes:{"http.method":j,"http.target":e.url}},i))}catch(t){if(t instanceof f.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:T,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isRevalidate:O,isOnDemandRevalidate:N})}),$)throw t;return await (0,c.sendResponse)(H,F,new Response(null,{status:500})),null}}}];

//# sourceMappingURL=%5Broot-of-the-server%5D__9c6cc408._.js.map