using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using TopJobsAuthAPI.DatabaseSettings;
using TopJobsAuthAPI.Interfaces;
using TopJobsAuthAPI.Services;

namespace TopJobsAuthAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.Configure<TopJobsAuthDatabaseSettings>(
                Configuration.GetSection(nameof(TopJobsAuthDatabaseSettings)));

            services.AddSingleton<ITopJobsAuthDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<TopJobsAuthDatabaseSettings>>().Value);

            services.AddScoped<IUserService, UserService>();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin",
                builder =>
                {
                    builder.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors("AllowOrigin");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("This is the User Authentication API");
                });
                endpoints.MapControllers();
            });
        }
    }
}
