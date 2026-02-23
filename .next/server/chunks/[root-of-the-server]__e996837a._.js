module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},59789,(e,t,r)=>{},61902,e=>{"use strict";e.s(["handler",()=>k,"patchFetch",()=>N,"routeModule",()=>R,"serverHooks",()=>C,"workAsyncStorage",()=>A,"workUnitAsyncStorage",()=>E],61902);var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),o=e.i(61916),i=e.i(69741),s=e.i(16795),l=e.i(87718),p=e.i(95169),d=e.i(47587),c=e.i(66012),u=e.i(70101),x=e.i(26937),f=e.i(10372),g=e.i(93695);e.i(52474);var h=e.i(220);e.s(["POST",()=>b],80461);var m=e.i(89171),y=e.i(29508);function v(e){let t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,e=>t[e])}async function b(e){try{let t=await e.formData(),r=t.get("name"),a=t.get("email"),n=t.get("phone"),o=t.get("message"),i=t.get("position"),s=t.get("cv"),l=t.get("coverLetter");if(!r||!a||!o)return m.NextResponse.json({error:"Name, email, and message are required"},{status:400});let p=v(r),d=v(a),c=n?v(n):"",u=v(o),x=i?v(i):"",f=y.default.createTransport({service:"gmail",auth:{user:process.env.GMAIL_USER,pass:process.env.GMAIL_APP_PASSWORD}}),g=[];if(s&&s.size>0){let e=Buffer.from(await s.arrayBuffer());g.push({filename:s.name,content:e,contentType:s.type||"application/pdf"})}if(l&&l.size>0){let e=Buffer.from(await l.arrayBuffer());g.push({filename:l.name,content:e,contentType:l.type||"application/pdf"})}let h={from:process.env.GMAIL_USER,to:process.env.CONTACT_EMAIL||process.env.GMAIL_USER,replyTo:a,subject:`New Job Application${x?` - ${x}`:""}`,html:`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Job Application</title>
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
                        New Job Application
                      </h1>
                      <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px; font-weight: 400;">
                        Veritas Accounting
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">

                      <!-- Position Card -->
                      ${x?`
                      <div style="background-color: #f8f9fa; border-left: 4px solid #232061; border-radius: 8px; padding: 20px; margin-bottom: 25px; text-align: center;">
                        <p style="margin: 0; color: #666666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Position Applied For</p>
                        <p style="margin: 0; color: #232061; font-size: 20px; font-weight: 600;">${x}</p>
                      </div>
                      `:""}

                      <!-- Applicant Information Card -->
                      <div style="background-color: #f8f9fa; border-left: 4px solid #232061; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h2 style="margin: 0 0 20px 0; color: #232061; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Applicant Information
                        </h2>
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Name:</strong>
                              <span style="color: #555555;">${p}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Email:</strong>
                              <a href="mailto:${a}" style="color: #232061; text-decoration: none; font-weight: 500;">${d}</a>
                            </td>
                          </tr>
                          ${c?`
                          <tr>
                            <td style="padding: 8px 0; color: #333333; font-size: 15px;">
                              <strong style="color: #232061; display: inline-block; min-width: 80px;">Phone:</strong>
                              <a href="tel:${n}" style="color: #232061; text-decoration: none; font-weight: 500;">${c}</a>
                            </td>
                          </tr>
                          `:""}
                        </table>
                      </div>

                      <!-- Message Card -->
                      <div style="background-color: #ffffff; border: 2px solid #e0e0e0; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
                        <h2 style="margin: 0 0 15px 0; color: #232061; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                          Cover Message
                        </h2>
                        <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-top: 15px;">
                          <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">${u}</p>
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
New Job Application${x?` - ${x}`:""}

Applicant Information:
Name: ${r}
Email: ${a}
${n?`Phone: ${n}`:""}

Cover Message:
${o}

${g.length>0?`
Attachments:
${g.map(e=>`- ${e.filename}`).join("\n")}`:""}

---
This email was sent from the Veritas Accounting job application form.
      `,attachments:g};return await f.sendMail(h),m.NextResponse.json({message:"Application submitted successfully"},{status:200})}catch(e){return console.error("Error sending application email:",e),m.NextResponse.json({error:"Failed to submit application. Please try again later."},{status:500})}}var w=e.i(80461);let R=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/apply/route",pathname:"/api/apply",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/apply/route.ts",nextConfigOutput:"",userland:w}),{workAsyncStorage:A,workUnitAsyncStorage:E,serverHooks:C}=R;function N(){return(0,a.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:E})}async function k(e,t,a){var m;let y="/api/apply/route";y=y.replace(/\/index$/,"")||"/";let v=await R.prepare(e,t,{srcPage:y,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:b,params:w,nextConfig:A,isDraftMode:E,prerenderManifest:C,routerServerContext:N,isOnDemandRevalidate:k,revalidateOnlyGenerated:P,resolvedPathname:T}=v,$=(0,i.normalizeAppPath)(y),S=!!(C.dynamicRoutes[$]||C.routes[T]);if(S&&!E){let e=!!C.routes[T],t=C.dynamicRoutes[$];if(t&&!1===t.fallback&&!e)throw new g.NoFallbackError}let _=null;!S||R.isDev||E||(_="/index"===(_=T)?"/":_);let j=!0===R.isDev||!S,q=S&&!j,O=e.method||"GET",M=(0,o.getTracer)(),I=M.getActiveScopeSpan(),U={params:w,prerenderManifest:C,renderOpts:{experimental:{cacheComponents:!!A.experimental.cacheComponents,authInterrupts:!!A.experimental.authInterrupts},supportsDynamicResponse:j,incrementalCache:(0,n.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:null==(m=A.experimental)?void 0:m.cacheLife,isRevalidate:q,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>R.onRequestError(e,t,a,N)},sharedContext:{buildId:b}},H=new s.NodeNextRequest(e),D=new s.NodeNextResponse(t),z=l.NextRequestAdapter.fromNodeNextRequest(H,(0,l.signalFromNodeResponse)(t));try{let i=async r=>R.handle(z,U).finally(()=>{if(!r)return;r.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=M.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=a.get("next.route");if(n){let e=`${O} ${n}`;r.setAttributes({"next.route":n,"http.route":n,"next.span_name":e}),r.updateName(e)}else r.updateName(`${O} ${e.url}`)}),s=async o=>{var s,l;let p=async({previousCacheEntry:r})=>{try{if(!(0,n.getRequestMeta)(e,"minimalMode")&&k&&P&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await i(o);e.fetchMetrics=U.renderOpts.fetchMetrics;let l=U.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let p=U.renderOpts.collectedTags;if(!S)return await (0,c.sendResponse)(H,D,s,U.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,u.toNodeOutgoingHttpHeaders)(s.headers);p&&(t[f.NEXT_CACHE_TAGS_HEADER]=p),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==U.renderOpts.collectedRevalidate&&!(U.renderOpts.collectedRevalidate>=f.INFINITE_CACHE)&&U.renderOpts.collectedRevalidate,a=void 0===U.renderOpts.collectedExpire||U.renderOpts.collectedExpire>=f.INFINITE_CACHE?void 0:U.renderOpts.collectedExpire;return{value:{kind:h.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:y,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isRevalidate:q,isOnDemandRevalidate:k})},N),t}},g=await R.handleResponse({req:e,nextConfig:A,cacheKey:_,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:k,revalidateOnlyGenerated:P,responseGenerator:p,waitUntil:a.waitUntil});if(!S)return null;if((null==g||null==(s=g.value)?void 0:s.kind)!==h.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==g||null==(l=g.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,n.getRequestMeta)(e,"minimalMode")||t.setHeader("x-nextjs-cache",k?"REVALIDATED":g.isMiss?"MISS":g.isStale?"STALE":"HIT"),E&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,u.fromNodeOutgoingHttpHeaders)(g.value.headers);return(0,n.getRequestMeta)(e,"minimalMode")&&S||m.delete(f.NEXT_CACHE_TAGS_HEADER),!g.cacheControl||t.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,x.getCacheControlHeader)(g.cacheControl)),await (0,c.sendResponse)(H,D,new Response(g.value.body,{headers:m,status:g.value.status||200})),null};I?await s(I):await M.withPropagatedContext(e.headers,()=>M.trace(p.BaseServerSpan.handleRequest,{spanName:`${O} ${e.url}`,kind:o.SpanKind.SERVER,attributes:{"http.method":O,"http.target":e.url}},s))}catch(t){if(t instanceof g.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:$,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isRevalidate:q,isOnDemandRevalidate:k})}),S)throw t;return await (0,c.sendResponse)(H,D,new Response(null,{status:500})),null}}}];

//# sourceMappingURL=%5Broot-of-the-server%5D__e996837a._.js.map