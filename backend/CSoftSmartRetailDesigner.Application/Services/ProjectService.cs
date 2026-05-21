using CSoftSmartRetailDesigner.Application.DTOs;
using CSoftSmartRetailDesigner.Application.Interfaces;

namespace CSoftSmartRetailDesigner.Application.Services;

public class ProjectService : IProjectService
{
    public void CreateProject(CreateProjectDto dto)
    {
        Console.WriteLine($"Proyecto creado: {dto.Name}");
    }
}